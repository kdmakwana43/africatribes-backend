export function finalTreeVieBuilder(inputData) {
  // Step 1: Create a dataMap for fast lookup by balkan_key
  const dataMap = new Map();
  inputData.forEach(person => {
    const data = person.dataValues || person;
    const pids = Array.isArray(data.pids) 
      ? data.pids 
      : (data.pids && typeof data.pids === 'string' 
          ? JSON.parse(data.pids) 
          : []);
    dataMap.set(data.balkan_key, { ...data, pids });
  });

  // Step 2: Create node object for tree
  function createNode(node, parentId) {
    return {
      pids: node.pids,
      id: node.id,
      balkan_key: node.balkan_key,
      first_name: node.first_name,
      surname: node.surname,
      dob: node.dob,
      birthTown: node.birthTown || "",
      profile: node.profile,
      gender: node.gender,
      mid: node.mid,
      fid: node.fid,
      userId: node.userId,
      parentId: parentId,
      spouses: [],
      children: []
    };
  }

  // Step 3: Get parent id if parent exists
  function getParentId(node) {
    if (node.fid && dataMap.has(node.fid)) {
      return dataMap.get(node.fid).id;
    }
    if (node.mid && dataMap.has(node.mid)) {
      return dataMap.get(node.mid).id;
    }
    return null;
  }

  // Step 4: Get spouses based on pids
  function getSpouses(node) {
    const spouses = [];
    if (node.pids && node.pids.length > 0) {
      node.pids.forEach(pid => {
        const spouse = dataMap.get(pid);
        if (spouse && !spouse.isSpouseProcessed) {
          spouse.isSpouseProcessed = true;
          const spouseNode = createNode(spouse, getParentId(spouse));
          spouses.push(spouseNode);
        }
      });
    }
    node.isSpouseProcessed = true;
    return spouses;
  }

  // Step 5: Get children recursively
  function getChildren(node) {
    const children = [];
    for (const [, potentialChild] of dataMap) {
      if (
        (potentialChild.fid === node.balkan_key || potentialChild.mid === node.balkan_key) &&
        !potentialChild.isChildProcessed
      ) {
        potentialChild.isChildProcessed = true;
        const childNode = createNode(potentialChild, node.id);
        childNode.spouses = getSpouses(childNode);
        childNode.children = getChildren(childNode);
        children.push(childNode);
      }
    }
    return children;
  }

  // Step 6: Detect true root candidates
  const allKeys = [...dataMap.keys()];
  const rootCandidates = [];

  for (const [, node] of dataMap) {
    const fidExists = node.fid && allKeys.includes(node.fid);
    const midExists = node.mid && allKeys.includes(node.mid);
    if (!fidExists && !midExists) {
      rootCandidates.push(node);
    }
  }

  const result = [];

  // Step 7: Build the tree from all valid roots
  for (const root of rootCandidates) {
    if (!root.isChildProcessed) {
      root.isChildProcessed = true;
      const rootNode = createNode(root, null);
      rootNode.spouses = getSpouses(rootNode);
      rootNode.children = getChildren(rootNode);
      result.push(rootNode);
    }
  }

  // Step 8: Reset temporary flags
  dataMap.forEach(node => {
    delete node.isSpouseProcessed;
    delete node.isChildProcessed;
  });

  return result;
}
