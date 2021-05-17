let Habilidades = ['Bash', 'Counter', 'Healing'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Krauser',
    hp: 1500,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);