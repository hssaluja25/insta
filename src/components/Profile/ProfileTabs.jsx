import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import {useState} from 'react';

const ProfileTabs = () => {
	const [activeFlex, setActiveFlex] = useState('Posts');

	const handleFlexClick = (flexName) => {
		setActiveFlex(flexName);
	};

	return (
		<Flex
			w={"full"}
			justifyContent={"center"}
			gap={{ base: 4, sm: 10 }}
			textTransform={"uppercase"}
			fontWeight={"bold"}
		>
			<Flex borderTop={activeFlex === 'Posts' ? '1px solid white' : ''} alignItems={"center"} p='3' gap={1} cursor={"pointer"}   onClick={() => handleFlexClick('Posts')}>
				<Box fontSize={20}>
					<BsGrid3X3 />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Posts
				</Text>
			</Flex>

			<Flex borderTop={activeFlex === 'Saved' ? '1px solid white' : ''} alignItems={"center"} p='3' gap={1} cursor={"pointer"}  onClick={() => handleFlexClick('Saved')}>
				<Box fontSize={20}>
					<BsBookmark />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Saved
				</Text>
			</Flex>

			<Flex borderTop={activeFlex === 'Likes' ? '1px solid white' : ''} alignItems={"center"} p='3' gap={1} cursor={"pointer"} onClick={() => handleFlexClick('Likes')}>
				<Box fontSize={20}>
					<BsSuitHeart fontWeight={"bold"} />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Likes
				</Text>
			</Flex>
		</Flex>
	);
};

export default ProfileTabs;
