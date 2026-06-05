export const fixedTitle: string = 'KekuSport - Gestión de Torneos Deportivos'

export const porra: string = `Porra - ${fixedTitle}`

export const combates: string = `Partidos - ${fixedTitle}`

export const combate = (fighter1: string | undefined, fighter2: string | undefined): string => `${fighter1} vs ${fighter2} - ${fixedTitle}`

export const entradas: string = `Inscripción - ${fixedTitle}`