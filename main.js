<!DOCTYPE html>
<html lang="en">

<head>
    <%- include('../partials/head'); %>
</head>

<body class="container">
    <header>
        <%- include('../partials/header'); %>
    </header>

    <main>
        <div class="jumbotron">
            <h1>usersearch</h1>

            <form action="/" method="GET">
                <p>Users: </p>

                <input type="text" id="user" name="user" class="form-control" placeholder="user" required>

                <button type="submit" class="btn btn-primary">Find Users</button>
            </form>
            <form action="" method="post">
                <p>Restaurants Picker:</p>
                <button type="submit" class="btn btn-primary">Find Restaurants</button>
            </form>

            <h2>Restaurants: </h2>
            <ul>
                <% if (locals.results) { %>

                    <% locals.results.forEach(function(result) { %>
                        <li>
                            <%= result%>
                        </li>
                        <% }); %>
                            <% } %>
            </ul>
        </div>
    </main>

    <footer>
        <%- include('../partials/footer'); %>
    </footer>
</body>

</html>
