import { useSelector } from "react-redux"

export const History = () => {

    const { history } = useSelector((state) => state.search);

    console.log(history);
    return (
        <>
            <ul><p>History Search</p>
                {
                    history.map(search =>
                        < li key={search}> {search}</li>
                    )
                }
            </ul>
        </>
    )
}
