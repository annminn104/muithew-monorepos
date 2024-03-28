import { AppModeEnum, appModeMock } from '@mocks';

import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const currentMode = cookies().get(appModeMock.key);

    if (!currentMode) return Response.json({ message: 'Error missing theme mode in cookie. Please refresh page. Thanks' }, { status: 400 });

    const result = {
      [AppModeEnum.Light]: AppModeEnum.Dark,
      [AppModeEnum.Dark]: AppModeEnum.Light
    };

    cookies().set(appModeMock.key, result[currentMode.value] || appModeMock.defaultMode, { httpOnly: true, path: '/;' });

    return Response.json({ message: 'Set Theme Mode Successfully' }, { status: 200 });
  } catch (error) {}
}
