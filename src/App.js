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
                            accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiLyIsImlhdCI6MTY5MTU5ODI5MywibmJmIjoxNjkxNTk4MjkzLCJleHAiOjE2OTE2MDM4MzEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFTampSM283Y0FDQTRRUngxZ2o0ZkZJQUI2NS9RZTEwODBENTUzSkZJbkVFQ2JiZzFWOVNBeWVjT1M3Z0xzMmxZIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQkkiLCJnaXZlbl9uYW1lIjoiT3BlcmFjaW9uZXMiLCJpcGFkZHIiOiIxODYuMjkuMTQ1Ljg2IiwibmFtZSI6Ik9wZXJhY2lvbmVzIEJJIiwib2lkIjoiZGQ2MTc0ZDYtODI3ZC00ZDRjLTg4MGYtMmI3MTk2NTc2MTY2Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEwNzczNjc3MTctMTYyMzI4NTEyNi0xMDkzNjI1MDY5LTM1NDgyNyIsInB1aWQiOiIxMDAzMjAwMDQ1QjE5RkI5IiwicmgiOiIwLkFRb0FoMWt3cEhqUGswLWRaTDhZcjJVNWV3a0FBQUFBQUFBQXdBQUFBQUFBQUFBS0FEMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJ2cFpmcGRDZjAwVGlnd1VkclRVUEZYaWIxSUlDdVRSclVWdE9UcktPbDZVIiwidGlkIjoiYTQzMDU5ODctY2Y3OC00ZjkzLTlkNjQtYmYxOGFmNjUzOTdiIiwidW5pcXVlX25hbWUiOiJvcGVyYWNpb25lc2JpQGVjb3BldHJvbC5jb20uY28iLCJ1cG4iOiJvcGVyYWNpb25lc2JpQGVjb3BldHJvbC5jb20uY28iLCJ1dGkiOiJ5WW1ZZmVZMERVS1FNQ1JkQ3dYOEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJmNzA5MzhhMC1mYzEwLTQxNzctOWU5MC0yMTc4Zjg3NjU3MzciLCJhOWVhODk5Ni0xMjJmLTRjNzQtOTUyMC04ZWRjZDE5MjgyNmMiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.gezv0HFDfGdHls3KLqOoOkkGKpz4O8ogr-0kBnDJp0y5QZHZ8zJ0AUhtXdQBH9gSXbVvAZjyq9Kx6Bxx09QDHVFNzJ_Z3Bo0VIojLeiZ_jLP6-D8DQD1SvRSfzPxC3jLN-RwCrCHkuqMr8H4boBODoFybeP8kfEcnAKU3SbNtJHgYUc9sZ7MHpzNMsMe1-xcfWwKXWDn-ktGDfRszBsAHX58V9jlcdOjZXW-RGx7Z-agt0wbR5pf5-EgEtSNAd_ZUL09tx6QNKv93hpf23D5HqDeoGYywuBP8agJbxSFmKT3yX6JnGhdAc6iwZuc0LqJhnpRD6wUSfxbAM68FOBVqQ",
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
