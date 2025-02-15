const http = require("http");

// Get website name from environment variable or use default
const WEBSITE_NAME = process.env.WEBSITE_NAME || "My Website";

// Set up the server's hostname and port
const hostname = "0.0.0.0"; // Listen on all network interfaces
const port = process.env.PORT || 4200; // Use environment variable for cloud providers or default to port 4200

// Specify the allowed IP address
const ALLOWED_IP = "87.224.69.92";

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;
    const clientIp = req.connection.remoteAddress || req.socket.remoteAddress;

    // Clean up the IP address if it's coming from behind a proxy (commonly in the X-Forwarded-For header)
    const ipAddress = clientIp.includes(",")
        ? clientIp.split(",")[0].trim()
        : clientIp;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // Basic routing example
    if (url === "/") {
        res.end(`
            <html>
                <head>
                    <title>Main Page</title>
                    <style>
                        body {
                            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
                            font-weight: bold;
                            background-color: #28a745; /* Initial green background */
                            color: white; /* White text for contrast */
                            animation: fadeIn 2s ease-in-out, backgroundColorChange 5s ease-in-out infinite; /* Apply fade-in and background color change animation */
                            overflow-x: hidden; /* Prevent horizontal scroll */
                            position: relative;
                            min-height: 100vh; /* Ensure full height */
                        }

                        h1 {
                            color: #fff;
                            animation: fadeIn 2s ease-in-out; /* Fade-in for h1 */
                        }

                        a {
                            text-decoration: none;
                            color: #007bff;
                        }

                        /* Keyframe for fade-in effect */
                        @keyframes fadeIn {
                            0% {
                                opacity: 0;
                                transform: translateY(20px); /* Start from below */
                            }
                            100% {
                                opacity: 1;
                                transform: translateY(0); /* End at the original position */
                            }
                        }

                        /* Keyframe for background color change */
                        @keyframes backgroundColorChange {
                            0% {
                                background-color: #28a745; /* Green */
                            }
                            50% {
                                background-color: #ADD8E6; /* Light Blue */
                            }
                            100% {
                                background-color: #28a745; /* Green */
                            }
                        }

                        /* Create the wave effect */
                        .wave-container {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 150px; /* Set the height of the wave */
                            background: url('https://www.transparenttextures.com/patterns/zig-zag-2.png'); /* Light pattern */
                            z-index: -1; /* Keep the wave behind the content */
                            animation: moveWave 10s linear infinite;
                        }

                        /* Animate the waves to give them movement */
                        @keyframes moveWave {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }
                    </style>
                </head>
                <body>
                    <h1>Welcome to the Home Page!</h1>
                    <p>Click <a href="/about">this link</a> to go to the About Me page.</p>
                    <p>Click <a href="/my+mission">this link</a> to go to the My Mission page.</p>
                    <p>Alternatively, append "/about" or "my+mission" to the end of the URL to go to the About Me or My Mission page, respectively.</p>

                    <!-- Add the wave container -->
                    <div class="wave-container"></div>
                </body>
            </html>
        `);
    } else if (url === "/about") {
        res.end(`
            <html>
                <head>
                    <title>About Me</title>
                    <style>
                        body {
                            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
                            font-weight: bold;
                            background-color: #28a745; /* Initial green background */
                            color: white; /* White text for contrast */
                            animation: fadeIn 2s ease-in-out, backgroundColorChange 5s ease-in-out infinite; /* Apply fade-in and background color change animation */
                            overflow-x: hidden; /* Prevent horizontal scroll */
                            position: relative;
                            min-height: 100vh; /* Ensure full height */
                        }

                        h1 {
                            color: #fff;
                            animation: fadeIn 2s ease-in-out; /* Fade-in for h1 */
                        }

                        a {
                            text-decoration: none;
                            color: #007bff;
                        }

                        /* Add the same wave container for this page */
                        .wave-container {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 150px; /* Set the height of the wave */
                            background: url('https://www.transparenttextures.com/patterns/zig-zag-2.png'); /* Light pattern */
                            z-index: -1; /* Keep the wave behind the content */
                            animation: moveWave 10s linear infinite;
                        }

                        /* Animate the waves to give them movement */
                        @keyframes moveWave {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }

                        /* Keyframe for fade-in effect */
                        @keyframes fadeIn {
                            0% {
                                opacity: 0;
                                transform: translateY(20px); /* Start from below */
                            }
                            100% {
                                opacity: 1;
                                transform: translateY(0); /* End at the original position */
                            }
                        }

                        /* Keyframe for background color change */
                        @keyframes backgroundColorChange {
                            0% {
                                background-color: #28a745; /* Green */
                            }
                            50% {
                                background-color: #ADD8E6; /* Light Blue */
                            }
                            100% {
                                background-color: #28a745; /* Green */
                            }
                        }
                    </style>
                </head>
                <body>
                    <h1>About Me</h1>
                    <p>This is a simple web server created using Node.js.</p>
                    <p><a href="/">Go Back</a>.</p>

                    <!-- Add the wave container -->
                    <div class="wave-container"></div>
                </body>
            </html>
        `);
    } else if (url === "/my+mission") {
        res.end(`
            <html>
                <head>
                    <title>My Mission</title>
                    <style>
                        body {
                            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
                            font-weight: bold;
                            background-color: #28a745; /* Initial green background */
                            color: white; /* White text for contrast */
                            animation: fadeIn 2s ease-in-out, backgroundColorChange 5s ease-in-out infinite; /* Apply fade-in and background color change animation */
                            overflow-x: hidden; /* Prevent horizontal scroll */
                            position: relative;
                            min-height: 100vh; /* Ensure full height */
                        }

                        h1 {
                            color: #fff;
                            animation: fadeIn 2s ease-in-out; /* Fade-in for h1 */
                        }

                        a {
                            text-decoration: none;
                            color: #007bff;
                        }

                        /* Add the same wave container for this page */
                        .wave-container {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 150px; /* Set the height of the wave */
                            background: url('https://www.transparenttextures.com/patterns/zig-zag-2.png'); /* Light pattern */
                            z-index: -1; /* Keep the wave behind the content */
                            animation: moveWave 10s linear infinite;
                        }

                        /* Animate the waves to give them movement */
                        @keyframes moveWave {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }

                        /* Keyframe for fade-in effect */
                        @keyframes fadeIn {
                            0% {
                                opacity: 0;
                                transform: translateY(20px); /* Start from below */
                            }
                            100% {
                                opacity: 1;
                                transform: translateY(0); /* End at the original position */
                            }
                        }

                        /* Keyframe for background color change */
                        @keyframes backgroundColorChange {
                            0% {
                                background-color: #28a745; /* Green */
                            }
                            50% {
                                background-color: #ADD8E6; /* Light Blue */
                            }
                            100% {
                                background-color: #28a745; /* Green */
                            }
                        }
                    </style>
                </head>
                <body>
                    <h1>My Mission</h1>
                    <p>To make a simple web server.</p>
                    <p><a href="/">Go Back</a>.</p>

                    <!-- Add the wave container -->
                    <div class="wave-container"></div>
                </body>
            </html>
        `);
    } else if (url === "/000") {
        if (ipAddress === ALLOWED_IP) {
            res.end(`
                <html>
                    <head>
                        <title>000 Access Allowed</title>
                        <style>
                            body {
                                font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
                                font-weight: bold;
                                background-color: #28a745; /* Initial green background */
                                color: white; /* White text for contrast */
                                animation: fadeIn 2s ease-in-out, backgroundColorChange 5s ease-in-out infinite; /* Apply fade-in and background color change animation */
                            }

                            h1 {
                                color: #fff;
                                animation: fadeIn 2s ease-in-out; /* Fade-in for h1 */
                            }

                            a {
                                text-decoration: none;
                                color: #007bff;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Access granted to restricted page!</h1>
                        <p>You're connected from the correct IP.</p>
                        <p><a href="/">Go Back</a></p>

                        <!-- Add the wave container -->
                        <div class="wave-container"></div>
                    </body>
                </html>
            `);
        } else {
            res.statusCode = 403; // Forbidden
            res.end(`
                <html>
                    <head>
                        <title>Access Denied</title>
                        <style>
                            body {
                                font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
                                font-weight: bold;
                                background-color: #28a745; /* Initial green background */
                                color: white; /* White text for contrast */
                                animation: fadeIn 2s ease-in-out, backgroundColorChange 5s ease-in-out infinite; /* Apply fade-in and background color change animation */
                            }

                            h1 {
                                color: #fff;
                                animation: fadeIn 2s ease-in-out; /* Fade-in for h1 */
                            }

                            a {
                                text-decoration: none;
                                color: #007bff;
                            }

                            /* Wave effect container */
                            .wave-container {
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 150px;
                                background: url('https://www.transparenttextures.com/patterns/zig-zag-2.png'); /* Light pattern */
                                z-index: -1;
                                animation: moveWave 10s linear infinite;
                            }

                            /* Animate the waves to give them movement */
                            @keyframes moveWave {
                                0% {
                                    transform: translateX(0);
                                }
                                100% {
                                    transform: translateX(-100%);
                                }
                            }

                            /* Keyframe for fade-in effect */
                            @keyframes fadeIn {
                                0% {
                                    opacity: 0;
                                    transform: translateY(20px);
                                }
                                100% {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }

                            /* Keyframe for background color change */
                            @keyframes backgroundColorChange {
                                0% {
                                    background-color: #28a745;
                                }
                                50% {
                                    background-color: #ADD8E6;
                                }
                                100% {
                                    background-color: #28a745;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Access Denied</h1>
                        <p>This site is restricted. Please connect with ${ALLOWED_IP} to access this page.</p>
                        <p>Error Code: BAD_HTTP_REQUEST</p>
                        <p><a href="/">Go Back</a></p>

                        <!-- Add the wave container -->
                        <div class="wave-container"></div>
                    </body>
                </html>
            `);
        }
    } else {
        res.statusCode = 404;
        res.end(`
            <html>
                <head>
                    <title>404 Not Found</title>
                    <style>
                        body {
                            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
                            font-weight: bold;
                            background-color: #28a745;
                            color: white;
                            animation: fadeIn 2s ease-in-out, backgroundColorChange 5s ease-in-out infinite;
                        }

                        h1 {
                            color: #fff;
                            animation: fadeIn 2s ease-in-out;
                        }

                        a {
                            text-decoration: none;
                            color: #007bff;
                        }
                    </style>
                </head>
                <body>
                   <h1>Page not found!</h1>
                    <p>Sorry, the page you're looking for does not exist.</p>
                    <p><a href="/">Go Back</a></p>

                    <!-- Add the wave container -->
                    <div class="wave-container"></div>
                </body>
            </html>
        `);
    }
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
