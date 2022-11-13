export default function replaceDiacritics(str) {
    str.toLowerCase().replace(/[áâä]/i, "a").replace(/[éêë]/i, "e").replace(/[íî]/i, "i").replace(/[óôö]/i, "o").replace(/[úû]/i, "u");
}
