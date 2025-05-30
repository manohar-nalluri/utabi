"use client";
import { useFormStatus } from "react-dom";
export default function LoginWithSpotify() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {!pending ? "Login using google" : "loading..."}
    </button>
  );
}
