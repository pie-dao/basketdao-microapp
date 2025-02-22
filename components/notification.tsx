import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Loader } from "./balance";

export const NotificationDisplay = () => (
  <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    rtl={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export const depositSuccessNotification = () => {
  toast.dismiss();
  toast("Deposit Successful 💰💰💰", { type: "success" });
};

export const approvalSuccessNotification = () => {
  toast.dismiss();
  toast("Approval Successful!", { type: "success" });
};

export const withdrawalSuccessNotification = () => {
  toast.dismiss();
  toast("Withdrawal Successful!", { type: "success" });
};

export const errorNotification = (err: string) => {
  toast.dismiss();
  toast(`Deposit Failed... ${err}`, { type: "error" });
};

export const walletSubmittedNotification = () =>
  toast("Transaction approved! 👍");

export const chainSwitchNotification = () => {
  toast.dismiss();
  toast("You must be connected to Ethereum Mainnet to use this app.", {
    type: "info",
  });
};

export const infoNotification = (text: string) =>
  toast(
    <div className="flex justify-between w-full items-center">
      <p>{text}</p>
      <Loader />
    </div>,
    {
      type: "info",
      autoClose: 10_000,
    }
  );
