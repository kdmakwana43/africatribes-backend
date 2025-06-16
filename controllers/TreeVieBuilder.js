export function finalTreeVieBuilder(inputData) {
  // Create a map for quick lookup by balkan_key
  const dataMap = new Map();
  inputData.forEach(person => {
    const data = person.dataValues || person; // Fallback to person if no dataValues
    dataMap.set(data.balkan_key, { ...data });
  });

  // Helper function to find parentId based on fid or mid
  function getParentId(person) {
    for (const [key, potentialParent] of dataMap) {
      if (person.fid === potentialParent.balkan_key || person.mid === potentialParent.balkan_key) {
        return potentialParent.id;
      }
    }
    return null;
  }

  // Helper function to find spouses based on pids
  function getSpouses(person) {
    const spouses = [];
    const pids = Array.isArray(person.pids) ? person.pids : (person.pids ? [person.pids] : []);
    pids.forEach(pid => {
      const spouse = dataMap.get(pid);
      if (spouse && !spouse.isSpouseProcessed) {
        const spouseNode = {
          pids: spouse.pids,
          id: spouse.id,
          balkan_key: spouse.balkan_key,
          first_name: spouse.first_name,
          surname: spouse.surname,
          dob: spouse.dob,
          birthTown: spouse.birthTown,
          profile: spouse.profile,
          gender: spouse.gender,
          mid: spouse.mid,
          fid: spouse.fid,
          userId: spouse.userId,
          parentId: getParentId(spouse),
          spouses: [],
          children: []
        };
        spouses.push(spouseNode);
      }
    });
    person.isSpouseProcessed = true; // Mark as processed for spouse assignment
    return spouses;
  }

  // Helper function to find children based on fid or mid
  function getChildren(person) {
    const children = [];
    for (const [key, potentialChild] of dataMap) {
      if ((potentialChild.fid === person.balkan_key || potentialChild.mid === person.balkan_key) && !potentialChild.isChildProcessed) {
        potentialChild.isChildProcessed = true; // Mark as processed to avoid duplication
        const childNode = {
          pids: potentialChild.pids,
          id: potentialChild.id,
          balkan_key: potentialChild.balkan_key,
          first_name: potentialChild.first_name,
          surname: potentialChild.surname,
          dob: potentialChild.dob,
          birthTown: potentialChild.birthTown,
          profile: potentialChild.profile,
          gender: potentialChild.gender,
          mid: potentialChild.mid,
          fid: potentialChild.fid,
          userId: potentialChild.userId,
          parentId: person.id,
          spouses: [],
          children: []
        };
        childNode.spouses = getSpouses(childNode);
        childNode.children = getChildren(childNode);
        children.push(childNode);
      }
    }
    return children;
  }

  // Process all individuals
  const result = [];
  for (const [key, person] of dataMap) {
    const hasParent = Array.from(dataMap.values()).some(
      p => p.balkan_key !== person.balkan_key && (person.fid === p.balkan_key || person.mid === p.balkan_key)
    );
    if (!hasParent && !person.isChildProcessed) {
      person.isChildProcessed = true; // Mark as processed
      const node = {
        pids: person.pids,
        id: person.id,
        balkan_key: person.balkan_key,
        first_name: person.first_name,
        surname: person.surname,
        dob: person.dob,
        birthTown: person.birthTown,
        profile: person.profile,
        gender: person.gender,
        mid: person.mid,
        fid: person.fid,
        userId: person.userId,
        parentId: null,
        spouses: [],
        children: []
      };
      node.spouses = getSpouses(node);
      node.children = getChildren(node);
      result.push(node);
    }
  }

  // Add nodes that are not children (e.g., spouses with no parents)
  for (const [key, person] of dataMap) {
    if (!person.isChildProcessed && !person.isSpouseProcessed) {
      const node = {
        pids: person.pids,
        id: person.id,
        balkan_key: person.balkan_key,
        first_name: person.first_name,
        surname: person.surname,
        dob: person.dob,
        birthTown: person.birthTown,
        profile: person.profile,
        gender: person.gender,
        mid: person.mid,
        fid: person.fid,
        userId: person.userId,
        parentId: getParentId(person),
        spouses: [],
        children: []
      };
      node.spouses = getSpouses(node);
      node.children = getChildren(node);
      result.push(node);
    }
  }

  // Reset processing flags
  dataMap.forEach(person => {
    delete person.isSpouseProcessed;
    delete person.isChildProcessed;
  });

  return result;
}