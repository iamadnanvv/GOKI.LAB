import { useEffect, useRef } from "react";

type Props = {
  buttonId?: string;
  className?: string;
};

/**
 * Renders a Razorpay hosted payment button.
 * Razorpay's script must be appended INSIDE the <form> element it hydrates.
 */
export function RazorpayButton({
  buttonId = "pl_TGUjpcxlzr9pLF",
  className,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    // Avoid duplicate mounts (StrictMode / re-render)
    if (form.querySelector("script[data-payment_button_id]")) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", buttonId);
    form.appendChild(script);
  }, [buttonId]);

  return <form ref={formRef} className={className} />;
}