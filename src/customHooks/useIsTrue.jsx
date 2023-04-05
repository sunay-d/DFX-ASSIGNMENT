import React from "react"

export default function useIsTrue() {

    const [isTrue, setIsTrue] = React.useState(false)

    function changeIsTrue() {
        setIsTrue(prev => !prev)
    }

    return [isTrue, changeIsTrue]

}

// used in BasicCard component