export const Loader = ({loading}) => {
    return (
        <div>
            {
                loading ? (
                    <h2 className='text-black'>Loading ...</h2>
                ) : null
            }
        </div>
    )
}