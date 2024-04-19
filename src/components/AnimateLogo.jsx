import { TypeAnimation } from "react-type-animation";

const AnimateLogo = () => {
  return (
    <TypeAnimation
      sequence={[
        "<MTZ/>",
        10000,
      ]}
      wrapper="span"
      speed={{type: 'keyStrokeDelayInMs', value: 50}}
      className="font-jetbrains font-black p-4"
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={1}
      cursor={false}
    />
  );
};

export default AnimateLogo;
