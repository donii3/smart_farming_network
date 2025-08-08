import RegisterForm from "@/components/auth/RegisterForm";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
    const session = await auth();
    if (session) redirect('/')

        
    return (
        <RegisterForm />
    );
}