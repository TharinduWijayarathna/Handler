import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/components/Checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AlertCircle, Check } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <ThemeProvider>
            <Head>
                <title>Register</title>
            </Head>

            <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-[800px]" style={{ height: '100vh' }}>
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Register</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your details below to create an account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <form onSubmit={submit} className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name" />
                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your Name"
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    {errors.name && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                {errors.name}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email" />
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="m@example.com"
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    {errors.email && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                {errors.email}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password" />
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Password"
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                    {errors.password && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                {errors.password}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation" />
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Confirm Password"
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                    {errors.password_confirmation && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                {errors.password_confirmation}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>

                                <Button className="w-full" disabled={processing}>
                                    Register
                                </Button>
                            </form>

                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href={route('login')} className="underline">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
