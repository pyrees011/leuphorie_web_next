export default function Footer() {
    return (
      <footer className="border-t">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <h3 className="font-bold mb-4">Taskku</h3>
              <address className="not-italic text-sm text-gray-500">
                Technology Park
                <br />
                B-13 Main Cross Road
                <br />
                Business District
                <br />
                taskku@example.com
              </address>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Analytics</li>
                <li>Planning</li>
                <li>Collaboration</li>
                <li>Data Management</li>
                <li>Integration</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Customers</li>
                <li>Strategic Partner</li>
                <li>Community</li>
                <li>Webinars & Events</li>
                <li>Product & Video</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Customer Stories</li>
                <li>Product & Pricing</li>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Metrics Catalog</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">© 2024 Taskku. All rights reserved.</div>
        </div>
      </footer>
    )
  }
  
  