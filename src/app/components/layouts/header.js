import Link from 'next/link'

export default function Header() {
    return (
        <nav class="navbar navbar-light">
            <div class="container">
                <Link class="navbar-brand" href="/">conduit</Link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <Link class="nav-link active" href="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/login">Sign in</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/register">Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}