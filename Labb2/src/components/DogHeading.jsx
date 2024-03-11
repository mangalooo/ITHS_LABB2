import styled from '@emotion/styled'

function DogHeading() {
    const Orange = styled.div`
        color: orange;
    `

    const SetDogHeading = () => {
        return (
            <>
                <h1>
                    <Orange> Dog </Orange>
                </h1>
                <br />
            </>
        )
    }

    return <>{SetDogHeading()}</>
}

export default DogHeading
