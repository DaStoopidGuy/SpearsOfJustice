import {writable, derived} from "svelte/store"

export const posts = writable([])
export const authenticated = writable(false)