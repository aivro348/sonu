export default function ProfileEditor() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Medical Profile</h1>
        <p className="text-foreground/60 mt-1">This information will be visible to first responders when your card is scanned.</p>
      </header>

      <form className="space-y-8">
        
        {/* Personal Details */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Full Name</label>
              <input type="text" defaultValue="Sarah Jenkins" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Date of Birth</label>
              <input type="date" defaultValue="1991-05-14" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Blood Type</label>
              <select className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none">
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="O+" selected>O+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Height (cm)</label>
                <input type="number" defaultValue="165" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Weight (kg)</label>
                <input type="number" defaultValue="62" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Critical Information */}
        <div className="glass rounded-2xl p-6 md:p-8 border-l-4 border-l-alert">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-alert">
            Critical Medical Information
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Allergies</label>
              <textarea 
                defaultValue="Peanuts (Severe - carries EpiPen)" 
                rows={3} 
                className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-alert outline-none"
                placeholder="List any known allergies..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Current Medications</label>
              <textarea 
                defaultValue="Lisinopril 10mg daily" 
                rows={3} 
                className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-action outline-none"
                placeholder="List current medications..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Chronic Conditions</label>
              <textarea 
                defaultValue="Hypertension" 
                rows={3} 
                className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none"
                placeholder="List chronic conditions..."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button type="button" className="px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}
