import React, { useEffect } from 'react'
import { Button, Flex } from '@chakra-ui/react'
const MobilePlay = () => {
    const handleKeyPress = (e) => {
        switch(e.key) {
            case "ArrowUp":
                console.log("W pressed")
                break;
            case "ArrowRight":
                console.log("D pressed");
                break;
            case "ArrowDown":
                console.log("S pressed");
                break;
            case "ArrowLeft":
                console.log("A pressed");
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            handleKeyPress(e)
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])
  return (
    <Flex margin="20px">
        <Button marginRight="10px" onClick={() => handleKeyPress({key: "ArrowUp"})}>
Up
        </Button>
        <Button
        marginRight="10px"
        onClick={() => handleKeyPress({ key: "ArrowRight" })}
      >
        Right
      </Button>
      <Button
        marginRight="10px"
        onClick={() => handleKeyPress({ key: "ArrowDown" })}
      >
        Down
      </Button>
      <Button onClick={() => handleKeyPress({ key: "ArrowLeft" })}>Left</Button>
      
    </Flex>
  )
}

export default MobilePlay
