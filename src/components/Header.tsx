import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <div className="w-full flex justify-end p-2">
      <ConnectButton chainStatus="icon" />
    </div>
  );
}
