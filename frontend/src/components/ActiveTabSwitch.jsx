import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab transition-all ${activeTab === "chats" ? "bg-blue-500/20 text-blue-300 font-semibold" : "text-gray-400 hover:text-gray-300"
          }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab transition-all ${activeTab === "contacts" ? "bg-blue-500/20 text-blue-300 font-semibold" : "text-gray-400 hover:text-gray-300"
          }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
