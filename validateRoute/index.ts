import { useAppStore } from "@/store/app";

const redirect: Record<string, string> = {
  admin: "/curators",
  curator: "/",
};

export default function (role: string) {
  return async function (route: any) {
    const appStore = useAppStore();
    const router = useRouter();
    if (!appStore.role) {
      router.push("/auth");
    }
    else if (role !== appStore.role) {
      router.push(redirect[appStore.role]);
    }else{
      return true;
    }
  };
}
