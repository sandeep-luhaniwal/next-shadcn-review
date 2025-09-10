import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "../../_components/register-form";
import { GoogleButton } from "../../_components/social-auth/google-button";

export default function RegisterV1() {
  return (
    <div className="flex min-h-screen">
      <div className="bg_main_hero flex w-full items-center justify-center p-8 lg:w-2/3">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-4 text-center">
            <p className="font-medium tracking-tight">Register</p>
            <div className="text-muted-foreground mx-auto max-w-xl">
              Fill in your details below. We promise not to quiz you about your first pet&apos;s name (this time).
            </div>
          </div>
          <div className="space-y-4">
            <RegisterForm />
            <GoogleButton className="w-full cursor-pointer" variant="outline" />
            <p className="text-muted-foreground text-center text-xs">
              Already have an account?{" "}
              <Link href="login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg_orange_gradient hidden lg:block lg:w-1/3">
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <div className="space-y-6">
            <Image alt='page-logo' width={188} height={74} src={"/images/svg/white-logo.svg"} />
            <div className="space-y-2">
              <h1 className="text-primary-foreground text-5xl font-medium">Welcome!</h1>
              <p className="text-primary-foreground/80 text-xl font-normal">You&apos;re in the right place.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
