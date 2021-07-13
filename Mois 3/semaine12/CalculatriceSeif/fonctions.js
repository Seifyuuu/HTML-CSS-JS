export function del(baseBalk){
    baseBalk.value = ""
}

export function delAll(baseBalk){
    baseBalk.value = baseBalk.value.slice(0, -1);
}