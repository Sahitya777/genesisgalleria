import {
    DynamicWidget,
    useDynamicContext,
    useIsLoggedIn,
  } from "@dynamic-labs/sdk-react-core";
  import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import Image from "next/image";
  
  export default function Header() {
    const isLoggedIn = useIsLoggedIn();
    const { setShowAuthFlow } = useDynamicContext();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { status, address } = useAccount();
  
    return (
      <div>
        {/* {isLoggedIn && <DynamicWidget />}
  
        {!isLoggedIn && (
          <div className="h-10 w-full flex justify-end items-center py-1 pr-4 text-xs">
            <button onClick={() => setShowAuthFlow(true)}>Connect Wallet</button>
          </div>
        )} */}
  
        <DropdownMenu>
          {status !== "connected" ? (
            <DropdownMenuTrigger className="h-10 ml-auto flex justify-end items-center py-1 pr-4 text-xs outline-none select-none">
              Connect Wallet
            </DropdownMenuTrigger>
          ) : (
            <DropdownMenuTrigger className="h-10 ml-auto flex justify-end items-center py-1 pr-4 text-xs outline-none select-none">
              {`${address?.slice(0, 6)}...${address?.slice(-4)}`.toLowerCase()}
            </DropdownMenuTrigger>
          )}
          {status !== "connected" ? (
            <DropdownMenuContent>
              {connectors.map((connector, {}) => (
                <DropdownMenuItem
                  key={connector.id}
                  onClick={() => connect({ connector })}
                >
                  <Image
                    src={connector?.icon?.light!}
                    width={20}
                    height={20}
                    alt={connector.name}
                    className="mr-2"
                  />
                  {connector.id === "braavos" ? "Braavos" : "Argent X"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => disconnect()} className="text-xs">
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
  
          {status === "connecting" && "Connecting..."}
        </DropdownMenu>
      </div>
    );
  }