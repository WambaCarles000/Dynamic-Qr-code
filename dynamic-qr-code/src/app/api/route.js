import { NextResponse } from 'next/server';

export async function GET(req) {
  const userAgent = req.headers.get('user-agent') || '';

  // Détecte iOS
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return NextResponse.redirect('https://apps.apple.com/app/id-appstore'); // Lien vers App Store
  }
  // Détecte Android
  else if (/Android/i.test(userAgent)) {
    return NextResponse.redirect('https://play.google.com/store/apps/details?id=playstore'); // Lien vers Play Store
  } else {
    return NextResponse.redirect('/'); // Redirection par défaut
  }
}

