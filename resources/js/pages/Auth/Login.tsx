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

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <ThemeProvider>
            <Head>
                <title>Log in</title>
            </Head>

            <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-[800px]" style={{ height: '100vh' }}>
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <form onSubmit={submit} className="grid gap-4">
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

                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
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
                                <div className="block mt-4">
                                    <div className="flex justify-between items-center">
                                        <label className="flex items-center">
                                            <Checkbox type='checkbox' style={{ backgroundColor: '#292524', borderColor: '#292524'}}
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                            />
                                            <span className="ms-2 text-sm text-gray-600">Remember me</span>
                                        </label>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="inline-block text-sm underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <Button className="w-full" disabled={processing}>
                                    Log in
                                </Button>
                            </form>

                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="#" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>

    );
}
