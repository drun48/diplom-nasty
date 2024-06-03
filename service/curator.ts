import { GET_LIST_CURATOR } from "@/query/curators/index";
import { useCuratorStore } from "@/store/curator";
import type { GET_LIST_CURATOR_DTO } from "~/query/curators/dto";

export async function getListCurator() {
  const { data } = await useAsyncQuery<GET_LIST_CURATOR_DTO>(
    GET_LIST_CURATOR,
    {
      fetchPolicy: "cache-and-network",
    }
  );
  if (!data.value) return;
  useCuratorStore().list = data.value.getCurators.map((item) => ({
    ...item,
    name: `${item.second_name ?? ''} ${item.first_name ?? ''} ${item.last_name ?? ''}`.trim(),
    district: item.district.name,
    role:item.role
  }));
}