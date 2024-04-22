import { Container, Text } from './styles';

export default function Button({
  children,
  width,
  height,
  margin,
  padding,
  backgroundColor,
  color,
  borderRadius,
  fontSize,
  fontWeight,
  action,
  disabled
}) {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
      onClick={action}
      disabled={disabled}
    >
      <Text
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {children}
      </Text>
    </Container>
  );
}
