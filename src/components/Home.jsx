import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
    return (
        <div>

            <NavigationBar />

            <div className="container mt-5 text-center">
                <div className="p-5 mb-4 bg-light rounded border shadow-sm">
                    <h1 className="text-success mb-3">Blood Donation Portal</h1>
                    <p className="lead">
                        Welcome! Use the quick links below to manage blood donor records.
                    </p>

                </div>


                <div className="row g-3">
                    <div className="col-12 col-md-6">
                        <div className="p-3 border rounded bg-white">
                            <h5>Age Limit</h5>
                            <p className="text-muted m-0">18 - 65 years old</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-3 border rounded bg-white">
                            <h5>Minimum Weight</h5>
                            <p className="text-muted m-0">50 kg</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home