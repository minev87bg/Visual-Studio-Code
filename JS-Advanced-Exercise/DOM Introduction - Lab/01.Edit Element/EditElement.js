function editElement(ref, match, replacer) {
    const el1 = ref
    const result = el1.textContent.split(match).join(replacer)
    el1.innerHTML = result
}
