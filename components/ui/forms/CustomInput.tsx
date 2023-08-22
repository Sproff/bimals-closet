import { CustomInputProps } from "@/types/form";
import { Box, Input, Text } from "@chakra-ui/react";

const CustomInput = ({
	id,
	defaultValue,
	placeholder,
	type,
	onChange: handleChange,
	formHook,
	passwordIcon,
	errorMessage,
	isDisabled,
}: CustomInputProps) => {
	return (
		<Box>
			<Box pos="relative">
				<Input
					id={id}
					defaultValue={defaultValue}
					border="1px solid #EAEAEA"
					borderRadius="1rem"
					placeholder={placeholder}
					type={type}
					py="2rem"
					fontSize="1.6rem"
					isDisabled={isDisabled}
					_placeholder={{
						fontWeight: 500,
						fontSize: "1.3rem",
						color: "brand.grey300",
					}}
					_focus={{
						borderColor: "brand.green100",
						boxShadow: "none",
					}}
					_hover={{
						borderColor: "none",
					}}
					{...{ ...formHook, ...(handleChange && { onChange: handleChange }) }}
				/>

				<Box
					as="span"
					cursor="pointer"
					fontSize="1.5rem"
					pos="absolute"
					zIndex="2"
					top="1.5rem"
					right="1rem"
				>
					{passwordIcon}
				</Box>
			</Box>
			<Text color="brand.red100" fontSize="1.1rem" fontWeight="300" mt=".5rem">
				{errorMessage}
			</Text>
		</Box>
	);
};

export { CustomInput };
