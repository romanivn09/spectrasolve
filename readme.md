# SpectraSolve

A reasoning engine that constructs plausible 3D molecular models from spectroscopy data and constraints.

## Stack
- **Frontend:** HTML / CSS / JavaScript (`public/`)
- **Backend:** Firebase Functions / Node.js (`functions/`)
- **Hosting:** Firebase Hosting
- **CI/CD:** GitHub Actions → Firebase

---

## One-time setup (do this once before first push)

### 1. Set your Firebase project ID
Edit `.firebaserc` and replace `YOUR_PROJECT_ID` with your actual Firebase project ID.  
Find it at: Firebase Console → Project Settings → General → Project ID.

### 2. Create a Firebase service account
1. Firebase Console → Project Settings → **Service accounts**
2. Click **Generate new private key** → confirm → download the JSON file
3. Go to your GitHub repo → **Settings → Secrets and variables → Actions**
4. Click **New repository secret**
   - Name: `FIREBASE_SERVICE_ACCOUNT`
   - Value: paste the **entire contents** of the downloaded JSON file
5. Save. You can delete the local JSON file — it's now stored securely in GitHub.

### 3. Enable the required Google APIs (if not already)
In your Firebase project, make sure **Cloud Functions API** and **Cloud Build API** are enabled.  
Firebase Console → Functions tab will prompt you if they aren't.

---

## Deployment flow

```
git commit → git push origin main → GitHub Actions → firebase deploy
```

Every push to `main` automatically:
1. Installs Functions dependencies
2. Authenticates to Google Cloud using the service account secret
3. Deploys Firebase Hosting (`public/`) + Firebase Functions (`functions/`)

---

## Local development

```bash
# Install functions deps
cd functions && npm install

# Run emulators locally
firebase emulators:start
```
