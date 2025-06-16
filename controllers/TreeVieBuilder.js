export function finalTreeVieBuilder(members) {
  const memberMap = {};
  members.forEach(member => {
    member.pids = member.pids || []; 
    if (typeof member.pids === 'string') {
      try {
        member.pids = JSON.parse(member.pids);
      } catch (e) {
        member.pids = [];
      }
    }
    member.spouses = [];
    member.children = [];
    memberMap[member.balkan_key] = member;
  });

  // Assign spouses
  members.forEach(member => {
    member.pids.forEach(pid => {
      const spouse = memberMap[pid];
      if (spouse) {
        if (!member.spouses.find(s => s.balkan_key === spouse.balkan_key)) {
          member.spouses.push(spouse);
        }
      }
    });
  });

  // Assign children
  members.forEach(member => {
    if (member.fid) {
      const parent = memberMap[member.fid];
      if (parent) {
        parent.children.push(member);
      }
    }
  });

  // Build spouse set to avoid duplicate roots
  const spouseIds = new Set();
  members.forEach(member => {
    member.pids.forEach(pid => {
      spouseIds.add(pid);
    });
  });

  const roots = members.filter(member => !member.fid && !spouseIds.has(member.balkan_key));

  function formatMember(member, visited = new Set()) {
    if (visited.has(member.balkan_key)) {
      return null; // prevent circular reference
    }
    visited.add(member.balkan_key);

    return {
      pids: member.pids,
      id: member.id,
      balkan_key: member.balkan_key,
      first_name: member.first_name,
      surname: member.surname,
      dob: member.dob,
      birthTown: member.birthTown,
      profile: member.profile,
      gender: member.gender,
      mid: member.mid,
      fid: member.fid,
      userId: member.userId,
      parentId: member.fid || null,
      spouses: member.spouses
        .map(spouse => formatMember(spouse, new Set(visited)))
        .filter(spouse => spouse !== null),
      children: member.children
        .map(child => formatMember(child, new Set(visited)))
        .filter(child => child !== null),
    };
  }

  return roots.map(root => formatMember(root));
}




// export const finalTreeVieBuilder = (members) => {
//   // Global set to track all processed member IDs
//   const seenIds = new Set();
//   // Global set to track processed spouse pairs
//   const processedSpouses = new Set();

//   // Helper function to build recursive member tree
//   const buildMemberTree = (member, allMembers) => {
//     const memberData = member.get ? member.get({ plain: true }) : member;

//     // Warn about empty balkan_key
//     if (!memberData.balkan_key) {
//       console.log(`Warning: Member ID ${memberData.id} has empty balkan_key`);
//       return null;
//     }

//     // Skip already processed members
//     if (seenIds.has(memberData.id)) {
//       console.log(`Skipping member ID ${memberData.id} due to global recursion`);
//       return null;
//     }
//     seenIds.add(memberData.id);

//     // Find children where fid or mid matches this member's balkan_key
//     const children = allMembers
//       .filter((m) => {
//         const isChild = (m.fid && m.fid === memberData.balkan_key) || (m.mid && m.mid === memberData.balkan_key);
//         if (isChild) {
//           console.log(`Found child ID ${m.id} for parent ID ${memberData.id}`);
//         }
//         return isChild;
//       })
//       .map((child) => buildMemberTree(child, allMembers))
//       .filter((child) => child !== null);

//     // Find spouses from pids, avoiding reciprocal nesting
//     const spouses = allMembers
//       .filter((m) => {
//         const isSpouse = memberData.pids && memberData.pids.includes(m.balkan_key);
//         const spousePairKey = [memberData.balkan_key, m.balkan_key].sort().join(':');
//         if (isSpouse && !processedSpouses.has(spousePairKey)) {
//           processedSpouses.add(spousePairKey);
//           return true;
//         }
//         return false;
//       })
//       .map((spouse) => buildMemberTree(spouse, allMembers))
//       .filter((spouse) => spouse !== null);

//     // Warn about missing pids
//     if (memberData.pids) {
//       memberData.pids.forEach((pid) => {
//         if (!allMembers.find((m) => m.balkan_key === pid)) {
//           console.log(`Warning: Missing spouse with balkan_key ${pid} for member ID ${memberData.id}`);
//         }
//       });
//     }

//     return {
//       ...memberData,
//       parentId: null, // Renamed to avoid confusion with parentId
//       spouses: spouses || [],
//       children: children || [],
//     };
//   };

//   // Collect IDs of members that are spouses (appear in pids)
//   const spouseIds = new Set();
//   members.forEach((member) => {
//     if (member.pids) member.pids.forEach((pid) => spouseIds.add(pid));
//   });

//   // Select members with no parents, excluding those that are only spouses
//   let formattedMembers = members
//     .filter((member) => {
//       const isTopLevel = !member.fid && !member.mid;
//       const isOnlySpouse = spouseIds.has(member.balkan_key) && !allMembers.some((m) => m.fid === member.balkan_key || m.mid === member.balkan_key);
//       return isTopLevel && !isOnlySpouse;
//     })
//     .sort((a, b) => (new Date(a.createdAt) || 0) - (new Date(b.createdAt) || 0))
//     .map((member) => buildMemberTree(member, members));

//   // Fallback to earliest created member if no top-level members found
//   if (formattedMembers.length === 0) {
//     console.log("No top-level members found, falling back to earliest createdAt");
//     formattedMembers = members
//       .sort((a, b) => (new Date(a.createdAt) || 0) - (new Date(b.createdAt) || 0))
//       .slice(0, 1)
//       .map((member) => buildMemberTree(member, members));
//   }

//   // Filter out null members
//   return formattedMembers.filter((member) => member !== null);
// };