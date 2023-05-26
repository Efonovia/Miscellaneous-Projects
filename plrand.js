let teamData = {
    arsenal: {
        name: "Arsenal",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    astonVilla: {
        name: "Aston Villa",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    brentford: {
        name: "Brentford",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    brighton: {
        name: "Brighton",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    burnley: {
        name: "Burnley",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    chelsea: {
        name: "Chelsea",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    crystalPalace: {
        name: "Crystal palace",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    everton: {
        name: "Everton",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    leeds: {
        name: "Leeds",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    leicester: {
        name: "Leicester",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    liverpool: {
        name: "Liverpool",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    manUnited: {
        name: "Man United",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    manCity: {
        name: "Man City",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    newcastle: {
        name: "Newcastle",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    norwich: {
        name: "Norwich",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    southampton: {
        name: "Southampton",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    tottenham: {
        name: "Tottenham",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    watford: {
        name: "Watford",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    westham: {
        name: "West Ham",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
    wolves: {
        name: "Wolves",
        wins: 0,
        draws: 0,
        losses: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        points: 0,
    },
}

let teams = [
"liverpool", 
"arsenal",
"westham",
"chelsea",
"southampton",
"tottenham",
"leicester",
"wolves",
"everton",
"astonVilla",
"newcastle",
"brighton",
"leeds",
"burnley",
"norwich",
"watford",
"manUnited",
"manCity",
"crystalPalace",
"brentford",
]

let table = document.querySelector('table');
let tr = document.querySelector('tr');



let possibleScores = [0, 1, 2, 3, 4];

let matches = 0;
for(let h = 0; h < teams.length; h++) {
    for(let a = 0; a < teams.length; a++) {
        let homeTeamScore = Math.floor(Math.random() * possibleScores.length);
        let awayTeamScore = Math.floor(Math.random() * possibleScores.length);

        if(teams[h] !== teams[a]) {
            console.log(teams[h] + ": " + homeTeamScore +  " - " + awayTeamScore + ": " + teams[a]);
            matches++;
            console.log(matches);
            if(homeTeamScore > awayTeamScore) {
                teamData[teams[h]]["wins"] += 1;
                teamData[teams[a]]["losses"] += 1;
                teamData[teams[h]]["GF"] += homeTeamScore;
                teamData[teams[h]]["GA"] += awayTeamScore;
                teamData[teams[a]]["GF"] += awayTeamScore;
                teamData[teams[a]]["GA"] += homeTeamScore;
                teamData[teams[h]]["points"] += 3;
                teamData[teams[h]]["GD"] = teamData[teams[h]]["GF"] - teamData[teams[h]]["GA"];
                teamData[teams[a]]["GD"] = teamData[teams[a]]["GF"] - teamData[teams[a]]["GA"];
            }
            else if(awayTeamScore > homeTeamScore) {
                teamData[teams[a]]["wins"] += 1;
                teamData[teams[h]]["losses"] += 1;
                teamData[teams[h]]["GF"] += homeTeamScore;
                teamData[teams[h]]["GA"] += awayTeamScore;
                teamData[teams[a]]["GF"] += awayTeamScore;
                teamData[teams[a]]["GA"] += homeTeamScore;
                teamData[teams[a]]["points"] += 3;
                teamData[teams[h]]["GD"] = teamData[teams[h]]["GF"] - teamData[teams[h]]["GA"];
                teamData[teams[a]]["GD"] = teamData[teams[a]]["GF"] - teamData[teams[a]]["GA"];
            }
            else {
                teamData[teams[h]]["draws"] += 1;
                teamData[teams[a]]["draws"] += 1;
                teamData[teams[h]]["GF"] += homeTeamScore;
                teamData[teams[h]]["GA"] += awayTeamScore;
                teamData[teams[a]]["GF"] += awayTeamScore;
                teamData[teams[a]]["GA"] += homeTeamScore;
                teamData[teams[h]]["points"] += 1;
                teamData[teams[a]]["points"] += 1;
                teamData[teams[h]]["GD"] = teamData[teams[h]]["GF"] - teamData[teams[h]]["GA"];
                teamData[teams[a]]["GD"] = teamData[teams[a]]["GF"] - teamData[teams[a]]["GA"];
            }
        }
    }
}


let teamDataList = Object.entries(teamData);
teamDataList.sort((a, b) => {
    if(a[1]["points"] !== b[1]["points"]) {
        return b[1]["points"] - a[1]["points"];
    }
    else if(b[1]["GD"] !== a[1]["GD"]){
        return b[1]["GD"] - a[1]["GD"];
    }
    else{
        return b[1]["GF"] - a[1]["GF"];
    }
})

let position = 0;
teamDataList.forEach((e) => {
    position++;
    console.log(`${e[1]["name"]} ${e[1]["wins"]} ${e[1]["draws"]} ${e[1]["losses"]} ${e[1]["GF"]} ${e[1]["GA"]} ${e[1]["GD"]} ${e[1]["points"]}`);
    switch(position) {
        case 1:
            table.innerHTML +=         `<tr>
                                        <td class="champions">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;
        case 2:
            table.innerHTML +=         `<tr>
                                        <td class="ucl">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;
        case 3:
            table.innerHTML +=         `<tr>
                                        <td class="ucl">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;   
        case 4:
            table.innerHTML +=         `<tr>
                                        <td class="ucl">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;     
        case 5:
            table.innerHTML +=         `<tr>
                                        <td class="el">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;     
        case 6:
            table.innerHTML +=         `<tr>
                                        <td class="el">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break; 
        case 7:
            table.innerHTML +=         `<tr>
                                        <td class="uecl">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;  
        case 18:
            table.innerHTML +=         `<tr>
                                        <td class="relegation">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;      
        case 19:
            table.innerHTML +=         `<tr>
                                        <td class="relegation">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;
        case 20:
            table.innerHTML +=         `<tr>
                                        <td class="relegation">${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;    
        default:
            table.innerHTML +=      `<tr>
                                        <td>${position}</td>
                                        <td>${e[1]["name"]}</td>
                                        <td>${e[1]["wins"]}</td>
                                        <td>${e[1]["draws"]}</td>
                                        <td>${e[1]["losses"]}</td>
                                        <td>${e[1]["GF"]}</td>
                                        <td>${e[1]["GA"]}</td>
                                        <td>${e[1]["GD"]}</td>
                                        <td>${e[1]["points"]}</td>
                                    </tr>`
            break;                        
    }    
    
});

