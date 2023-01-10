import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import axios from "axios";
import ContactList from "./Contact/ContactList";
import ButtonComponent from "./Button";
import {
  showModalA,
  showModalB,
  hideModal,
  toggleCheckbox,
} from "../redux/actions/functions";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ModalA = () => {
  const dispatch = useDispatch();
  const { showModalB, searchQuery, checked } = useSelector((state) => state);
  const [contacts, setContacts] = useState({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(hideModal());
    navigate("/");
  };
  const handleSearch = debounce((query) => {
    // setPage(1);
    setContacts({});
    setHasMore(false);
    dispatch({ type: "SET_SEARCH_QUERY", query });
    // getContacts();
    getFilter();
  }, 500);

  const getFilter = () => {
    axios
      .get("https://api.dev.pastorsline.com/api/contacts.json", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNjc2NDM5MjI0LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjYwODg3MjI0fQ.X6EnuvO5j5n9WLNrQUyJ9M4ABtDQpfsrjfWnts3GmPs",
        },
        params: {
          companyId: 171,
          query: searchQuery,
          page,
        },
      })
      .then((res) => {
        const newContacts = res.data.contacts;
        setContacts({ ...newContacts });
        if (res.data.total === Object.keys(contacts).length) {
          //   setHasMore(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getContacts = useCallback(() => {
    axios
      .get("https://api.dev.pastorsline.com/api/contacts.json", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNjc2NDM5MjI0LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjYwODg3MjI0fQ.X6EnuvO5j5n9WLNrQUyJ9M4ABtDQpfsrjfWnts3GmPs",
        },
        params: {
          companyId: 171,
          query: searchQuery,
          page,
          countryId: 226,
        },
      })
      .then((res) => {
        const newContacts = res.data.contacts;
        setContacts({ ...contacts, ...newContacts });
        setPage(page + 1);
        if (res.data.total === Object.keys(contacts).length) {
          setHasMore(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  useEffect(() => {
    getContacts();
  }, [hasMore]);

  const handleLoadMore = () => {
    getContacts();
  };

  const handleCheck = () => {
    dispatch(toggleCheckbox());
  };

  return (
    <Modal show={showModalA} onHide={hideModal}>
      <Modal.Header class="d-flex">
        <Modal.Title>All Contacts</Modal.Title>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </Modal.Header>
      <Modal.Body class="d-flex flex-column">
        <div class="d-flex gap-3 justify-content-center mt-4">
          <ButtonComponent
            btnName="All Contact"
            showModal={showModalA}
            backgroundColor="#46139f"
          />
          <ButtonComponent
            btnName="US Contact"
            showModal={showModalB}
            backgroundColor="#ff7f50"
          />
          <Button onClick={handleClose}>Close </Button>
        </div>
        <div>
          <ContactList contacts={contacts} checked={checked} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="modal-footer">
          <label htmlFor="checkbox-a">
            <input
              type="checkbox"
              id="checkbox-a"
              checked={checked}
              onChange={handleCheck}
            />
            Only even
          </label>
          <Button onClick={handleLoadMore}>Load more</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
