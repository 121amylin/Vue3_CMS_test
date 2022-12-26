export default function () {
    const menuIsOpen = ref(false)

    const menuIsOpenHandle = () => {
        console.log(11)
        menuIsOpen.value = !menuIsOpen.value
    }

    return {
        menuIsOpen,
        menuIsOpenHandle
    }
}