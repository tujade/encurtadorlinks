// Search save links
export  async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks)  || [];

  return linksSaves
}


// Save links on local storage
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  //If link ID is already saved, then don't duplicate
  const hasLink = linksStored.some( Link => Link.id === newLink.id );

  if(hasLink) {
    return;
  }

  // Add the new link on the local storage
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
}





//Delete some save link