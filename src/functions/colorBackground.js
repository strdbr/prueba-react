const colorBackground =
function(type){
    switch(type){
        case 'fire':
            return({backgroundColor:'#ff412b'})
        case 'flying':
            return({backgroundColor:'#5778ff'})
        case 'bug':
            return({backgroundColor:'#00f070'})
        case 'dark':
            return({backgroundColor:'#242424'})
        case 'dragon':
            return({backgroundColor:'#5c2fd6'})
        case 'electric':
            return({backgroundColor:'#e6e21e'})
        case 'fairy':
            return({backgroundColor:'#fa73ff'})    
        case 'fighting':
            return({backgroundColor:'#ff9152'})    
        case 'ghost':
            return({backgroundColor:'#9322e3'})
        case 'grass':
            return({backgroundColor:'#20bf00'})
        case 'ground':
            return({backgroundColor:'#b05b00'})
        case 'ice':
            return({backgroundColor:'#2bd1ff'})
        case 'normal':
            return({backgroundColor:'#dedede'})
        case 'poison':
            return({backgroundColor:'#7c339e'})
        case 'psychic':
            return({backgroundColor:'#ff33dd'})
        case 'rock':
            return({backgroundColor:'#a64500'})
        case 'steel':
            return({backgroundColor:'#808080'})
        case 'water':
            return({backgroundColor:'#128cff'})
                
    }
}

export default colorBackground;