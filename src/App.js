import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <PowerBIEmbed
                    embedConfig={
                        {
                            type: 'report', // Supported types: report, dashboard, tile, visual, and qna.
                            id: "6bfb51c8-962d-4d89-b8b4-baa1e28ad927",
                            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=6bfb51c8-962d-4d89-b8b4-baa1e28ad927&groupId=77084e6b-f3ce-40a3-97b6-94d7c49d3231&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",                            
                            accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiLyIsImlhdCI6MTY5MTYxMDg4NiwibmJmIjoxNjkxNjEwODg2LCJleHAiOjE2OTE2MTY0MDcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFTdm5YbVF6Sko3OE8rOUYwVVEzK1FyQ0ViSXQ4RmRrYW0rbTVFWmZkVmlKa2JMNUt5b1haVTcwL2tRNHhNMVJTIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQkkiLCJnaXZlbl9uYW1lIjoiT3BlcmFjaW9uZXMiLCJpcGFkZHIiOiIxODYuMjkuMTQ1Ljg2IiwibmFtZSI6Ik9wZXJhY2lvbmVzIEJJIiwib2lkIjoiZGQ2MTc0ZDYtODI3ZC00ZDRjLTg4MGYtMmI3MTk2NTc2MTY2Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEwNzczNjc3MTctMTYyMzI4NTEyNi0xMDkzNjI1MDY5LTM1NDgyNyIsInB1aWQiOiIxMDAzMjAwMDQ1QjE5RkI5IiwicmgiOiIwLkFRb0FoMWt3cEhqUGswLWRaTDhZcjJVNWV3a0FBQUFBQUFBQXdBQUFBQUFBQUFBS0FEMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJ2cFpmcGRDZjAwVGlnd1VkclRVUEZYaWIxSUlDdVRSclVWdE9UcktPbDZVIiwidGlkIjoiYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiIiwidW5pcXVlX25hbWUiOiJvcGVyYWNpb25lc2JpQGVjb3BldHJvbC5jb20uY28iLCJ1cG4iOiJvcGVyYWNpb25lc2JpQGVjb3BldHJvbC5jb20uY28iLCJ1dGkiOiJhOVhMUVRRTHMwLW1QVm40MHB2X0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJmNzA5MzhhMC1mYzEwLTQxNzctOWU5MC0yMTc4Zjg3NjU3MzciLCJhOWVhODk5Ni0xMjJmLTRjNzQtOTUyMC04ZWRjZDE5MjgyNmMiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.E1Ocs1WABndCuOZtw8PzpPAWTUQ4OVgkIhDSQRHxBzFneOlKZS9TsKCqesD29lX_0oiOb6qx9q5QCMDRRhRwqDguFPfaE-JmwMJBU9Ck83ZHUqEy9XI4JsxrgUR5Tgz37ymO1qDQLhgf5YsnhIgCiCl5kpshxt84hdQX0zX4ck-P83MA_DyFfZSXnrIeEPhZOaE592OexVEl5AACdct3C9SeHxQl3RMEKpfRJfVUeezdz0YMX31vASN3X75R9gwUgaCDxlnWqO9KpOTgFA4nva8HBfMjrallwivPQu5BfjmtYH5FVje99vZ4Pb88MoRkTEtTi2u_pY07HNFtXiaURA",
                            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad if you're embedding for your organization.
                            settings: {
                                panes: {
                                    filters: {
                                        expanded: false,
                                        visible: false
                                    }
                                },
                            }
                        }
                    }

                    eventHandlers={
                        new Map([
                            ['loaded', function () {
                                console.log('Report loaded');
                            }],
                            ['rendered', function () {
                                console.log('Report rendered');
                            }],
                            ['error', function (event) {
                                console.log(event.detail);
                            }]
                        ])
                    }

                    cssClassName={
                        "Embed-container"
                    }

                    getEmbeddedComponent={
                        (embeddedReport) => {
                            window.report = embeddedReport;
                        }
                    }

                />
            </header>
        </div>
    );
}

export default App;
