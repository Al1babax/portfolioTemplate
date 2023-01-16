export function ProjectComp(props) {
    return (

        <div className="place-items-center flex justify-center item-center  ">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <p>{props.hello}</p>
            </div>
        </div>


    )
}