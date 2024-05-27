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
        className="font-jetbrains font-black text-[1.5em] sm:text-[2em] p-4"
        repeat={1}
        cursor={false}
      />
  );
};

export default AnimateLogo;
