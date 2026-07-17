export const philosophySystems = {
  stoicism: ['virtue', 'temperance', 'discipline', 'inner citadel'],
  platonism: ['ideal forms', 'beauty', 'truth', 'ascent'],
  hermeticism: ['correspondence', 'transmutation', 'as above so below'],
};

export function philosophyMotifs(system) {
  return philosophySystems[system] || [];
}
