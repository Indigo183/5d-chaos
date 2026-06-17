import themeColours from '../../utils/colours';

enum Nation {
  Ankara = 'Ankara',
  Belgium = 'Belgium',
  Berlin = 'Berlin',
  Brest = 'Brest',
  Budapest = 'Budapest',
  Bulgaria = 'Bulgaria',
  Denmark = 'Denmark',
  Greece = 'Greece',
  Kiel = 'Kiel',
  London = 'London',
  Norway = 'Norway',
  Rumania = 'Rumania',
  Serbia = 'Serbia',
  StPetersburg = 'StPetersburg',
  Trieste = 'Trieste',
  Tunis = 'Tunis',
  Warsaw = 'Warsaw',

  Superuser = "Superuser",
}

export const getNationColour = (nation?: Nation, isEmphasised: boolean = true) => {
  if (!nation) return isEmphasised ? themeColours.unclaimedEmphasised : themeColours.unclaimedStandard;
  return {
    [Nation.Ankara]: '#5CFF9B',
    [Nation.Belgium]: '#FF1717',
    [Nation.Berlin]: '#BF367E',
    [Nation.Brest]: '#87A96B',
    [Nation.Budapest]: '#89CFF0',
    [Nation.Bulgaria]: '#223241',
    [Nation.Denmark]: '#CAB310',
    [Nation.Greece]: '#FD5F00',
    [Nation.Kiel]: '#1ADD51',
    [Nation.London]: '#00FFFF',
    [Nation.Norway]: '#4D4DC5',
    [Nation.Rumania]: '#FFF984',
    [Nation.Serbia]: '#C072C8',
    [Nation.StPetersburg]: '#8B0000',
    [Nation.Trieste]: '#007FFF',
    [Nation.Tunis]: '#FBCCE7',
    [Nation.Warsaw]: '#E6E6E6',

    [Nation.Superuser]: '#FFFFFF',
  }[nation];
};

export default Nation;
