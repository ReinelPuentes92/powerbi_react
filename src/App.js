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
                            accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiLyIsImlhdCI6MTY5MTUzMDMxMCwibmJmIjoxNjkxNTMwMzEwLCJleHAiOjE2OTE1MzUzNDYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUF5UVJYZGEvWXpLNlhqUVE0bUtKTm9La0R1d2trbURWWENVZXFEa3FBNnBJWFl5KzRrb2QvUjFvRmNpSHB3RCtMIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQkkiLCJnaXZlbl9uYW1lIjoiT3BlcmFjaW9uZXMiLCJpcGFkZHIiOiI4LjI0Mi4yMTEuOTQiLCJuYW1lIjoiT3BlcmFjaW9uZXMgQkkiLCJvaWQiOiJkZDYxNzRkNi04MjdkLTRkNGMtODgwZi0yYjcxOTY1NzYxNjYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTA3NzM2NzcxNy0xNjIzMjg1MTI2LTEwOTM2MjUwNjktMzU0ODI3IiwicHVpZCI6IjEwMDMyMDAwNDVCMTlGQjkiLCJyaCI6IjAuQVFvQWgxa3dwSGpQazAtZFpMOFlyMlU1ZXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUQwLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6InZwWmZwZENmMDBUaWd3VWRyVFVQRlhpYjFJSUN1VFJyVVZ0T1RyS09sNlUiLCJ0aWQiOiJhNDMwNTk4Ny1jZjc4LTRmOTMtOWQ2NC1iZjE4YWY2NTM5N2IiLCJ1bmlxdWVfbmFtZSI6Im9wZXJhY2lvbmVzYmlAZWNvcGV0cm9sLmNvbS5jbyIsInVwbiI6Im9wZXJhY2lvbmVzYmlAZWNvcGV0cm9sLmNvbS5jbyIsInV0aSI6InQtMTl0bVpHeVUtSURHOHdZWjhfQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImY3MDkzOGEwLWZjMTAtNDE3Ny05ZTkwLTIxNzhmODc2NTczNyIsImE5ZWE4OTk2LTEyMmYtNGM3NC05NTIwLThlZGNkMTkyODI2YyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.YHZ4NWql_1OK_-ZsISXephGO_8dRpmatrP8wHTOLpiWQTnje55o0g3AJCYsVkjFH4Rg09DpHx5uaBdlzSg5d1EPIsgEv1tQUYnYoIuvMIkWixFvVgRMWu9bWK7yozjLf-XtD0nRBQv6I6auwahIwLx6SgCyGUigHFhX99xKHY8vEZVprVDAoDPpMGndQMJUmhUBpPe7MEt9qjOgbYou9hSz4Pri47vwOLQeA4DocLzs5Kt54wnQzHchv8MXiGEYddNhvRVEWuYaPeMYJ098yhQaX6Lw0MjAP-_zjMcH5QeYWYsQtSD6Fsvc8ijnzS6ALvONnWdfYCozNb3KogdfvOw",
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
