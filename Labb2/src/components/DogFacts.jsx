import styled from '@emotion/styled'

function DogFacts() {
    const Blue = styled.div`
        color: blue;
    `
    const Green = styled.div`
        color: green;
    `

    const facts = () => {
        return (
            <>
                <Blue>
                    <p> 1. Dogs are the most popular pet on the planet! </p>
                </Blue>
                <Green>
                    <p> 2. They evolved from a now-extinct species of wolf. </p>
                </Green>
                <Blue>
                    <p> 3. They can learn over 100 words and gestures! </p>
                </Blue>
                <Green>
                    <p>
                        {' '}
                        4. Dog noses are at least 40x more sensitive than ours!{' '}
                    </p>
                </Green>
                <Blue>
                    <p> 5. Many work as assistance dogs, helping humans! </p>
                </Blue>
            </>
        )
    }

    return <>{facts()}</>
}

export default DogFacts
