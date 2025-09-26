export const Button = (obj: { name: string, onPress: () => void }) => {
    return (
        <button onClick={obj.onPress} className='bg-pink-300/50 hover:shadow-neutral-50 shadow-md text-white rounded-lg p-1'>{obj.name}</button>
    )

}