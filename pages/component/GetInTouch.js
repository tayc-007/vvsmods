import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon,HamburgerIcon ,LockIcon} from '@chakra-ui/icons';
import styles from 'styles/home.module.css'; // Import the CSS module for styling
import Link from "next/link";
const GetInTouch =({colorScheme}) =>{ 
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    
    return(
    
    <>
    <Link href='https://calendar.app.google/WnTRLGUUpQiaxbrU9' target='_blank'>
        <Button
        
         colorScheme={colorScheme} size='lg' variant={'outline'} mt={10}  className={isLogoHovered ? styles.logoHovered : ''}
           
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            transition="transform 0.3s ease" // Smooth transition
            transform={isLogoHovered ? 'scale(1.1)' : 'scale(1)'}
            rightIcon={<LockIcon />}>
    Book Your Car
  </Button>
  </Link>
    </>
)
}

export default GetInTouch;