import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectCard = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="border-2 border-roAquaBlue rounded-lg shadow-md p-6 max-w-lg w-full mx-4 sm:mx-auto backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-slate-400">
            Welcome to{" "}
            <span className="text-roAquaBlue font-quicksand font-bold">
              Rising Oceans
            </span>
            !
          </h2>
          <p className="text-center text-slate-400 sm:text-lg">
            Please connect your wallet to continue.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 60,
            }}
          >
            <ConnectButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectCard;
